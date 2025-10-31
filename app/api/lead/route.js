export async function POST(request) {
  try {
    const body = await request.json();
    const now = new Date().toISOString();
    console.log("[LEAD]", now, body);
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, source: "aica-sunmica-next", ts: now })
      });
    }
    return Response.json({ ok: true, message: "Thanks! Our team will contact you shortly." });
  } catch (e) {
    console.error("Lead error:", e);
    return new Response(JSON.stringify({ ok:false, message:"Error received. Please try again." }), { status: 400 });
  }
}