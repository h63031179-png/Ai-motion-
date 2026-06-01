export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        error: 'No image provided'
      });
    }

    // FREE DEMO VIDEO
    const demoVideo =
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

    return res.status(200).json({
      success: true,
      video: demoVideo,
      message: 'AI Motion Generated'
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Server error'
    });
  }
}
