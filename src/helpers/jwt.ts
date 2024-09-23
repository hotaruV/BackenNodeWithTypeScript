import jwt from 'jsonwebtoken';

class JWTGenerator {
    // Método estático para generar el JWT
    static generate(uid: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const payload = { uid };

            jwt.sign(
                payload,
                process.env.JWT_SECRET_KEY!,
                { expiresIn: process.env.TOKEN_TIME_VALIDATE },
                (err, token) => {
                    if (err) {
                        console.error(err);
                        reject('No se generó JWT');
                    } else {
                        resolve(token!); // Asegúrate de que `token` no sea undefined
                    }
                }
            );
        });
    }
}

export default JWTGenerator;
