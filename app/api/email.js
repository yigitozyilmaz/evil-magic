export default function handler(req, res) {
    const { email } = req.query;

    if (req.method === 'POST') {
        console.log("API'ye gelen email:", email);

        // Başarılı bir yanıt dön
        res.status(200).json({ message: "Email received successfully", email });
    } else {
        // Eğer POST dışındaki bir istek yapılırsa, 405 hatası ver
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
