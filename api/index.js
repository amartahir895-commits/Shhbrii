export default async function handler(req, res) {
  try {
    const targetUrl = "https://jahangirdatabase.vercel.app/api/otp?type=sms&iDisplayLength=10000";

    const response = await fetch(targetUrl);
    const data = await response.json();

    res.status(200).json({
      success: true,
      source: "your-api",
      data: data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch target API",
    });
  }
}
