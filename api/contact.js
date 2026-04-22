import nodemailer from "nodemailer";

const labelMap = {
  name: "Ad Soyad",
  phone: "Telefon",
  email: "E-posta",
  sector: "Isletme Sektoru",
  source: "Kaynak",
  submittedAt: "Gonderim Zamani",
};

const sectorMap = {
  insaat: "Insaat / Contractor",
  restoran: "Restoran / Kafe",
  temizlik: "Temizlik Hizmetleri",
  diger: "Diger",
  "pdf-download": "PDF Rehber Indirme",
};

const sourceMap = {
  "landing-texas": "Texas Landing Page",
  "pdf-lead-magnet": "PDF Lead Magnet",
};

const fieldOrder = ["name", "phone", "email", "sector", "source", "submittedAt"];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatValue = (key, value) => {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (key === "sector") {
    return sectorMap[value] || value;
  }

  if (key === "source") {
    return sourceMap[value] || value;
  }

  return String(value);
};

const normalizePayload = (payload = {}) => ({
  name: String(payload.name || "").trim(),
  phone: String(payload.phone || "").trim(),
  email: String(payload.email || "").trim(),
  sector: String(payload.sector || "").trim(),
  source: String(payload.source || "landing-texas").trim(),
  submittedAt: new Date().toLocaleString("en-US", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }),
});

const buildRows = (lead) =>
  fieldOrder
    .map((key) => {
      const label = labelMap[key] || key;
      const value = escapeHtml(formatValue(key, lead[key]));

      return `
        <tr>
          <td style="padding:10px 12px; border-bottom:1px solid #e6e6e6; color:#555; width:35%;"><strong>${label}</strong></td>
          <td style="padding:10px 12px; border-bottom:1px solid #e6e6e6; color:#111;">${value}</td>
        </tr>
      `;
    })
    .join("");

const buildText = (lead) =>
  fieldOrder
    .map((key) => `${labelMap[key] || key}: ${formatValue(key, lead[key])}`)
    .join("\n");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const lead = normalizePayload(req.body);
    const isPdfLead = lead.source === "pdf-lead-magnet";

    if (!lead.name || !lead.sector || (isPdfLead ? !lead.email : !lead.phone)) {
      return res.status(400).json({ ok: false, message: "Missing required fields" });
    }

    const gmailUser = process.env.GMAIL_USER || "bugucam@gmail.com";
    const recipient = process.env.CONTACT_TO || gmailUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = `
      <div style="font-family:Arial, sans-serif; background:#f7f7fb; padding:24px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #ececf2; border-radius:12px; overflow:hidden;">
          <div style="padding:16px 20px; background:#5b2dff; color:#fff;">
            <h2 style="margin:0; font-size:18px; font-weight:600;">New Texas Landing Lead</h2>
          </div>
          <div style="padding:20px;">
            <h3 style="margin:0 0 12px 0; font-size:16px; color:#111;">Lead Details</h3>
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              ${buildRows(lead)}
            </table>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: gmailUser,
      to: recipient,
      subject: `New Texas Landing Lead - ${formatValue("sector", lead.sector)}`,
      text: `--- LEAD DETAILS ---\n${buildText(lead)}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ ok: false });
  }
}
