import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  const {
    prenom, nom, email, telephone, societe, poste,
    type, budget, delai, source, message,
  } = body;

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Kama Agency <contact@kamaagency.com>",
    to: "contact@kamaagency.com",
    replyTo: email,
    subject: `Nouveau projet — ${type || "Contact"} | Kama Agency`,
    text: [
      `Prénom : ${prenom || "—"}`,
      `Nom : ${nom}`,
      `Email : ${email}`,
      `Téléphone : ${telephone || "—"}`,
      `Société : ${societe || "—"}`,
      `Poste : ${poste || "—"}`,
      ``,
      `Type de projet : ${type || "Non précisé"}`,
      `Budget estimé : ${budget || "Non précisé"}`,
      `Délai souhaité : ${delai || "Non précisé"}`,
      `Comment nous a trouvé : ${source || "Non précisé"}`,
      ``,
      `Description du projet :`,
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
