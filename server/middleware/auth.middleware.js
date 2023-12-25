import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
   try {
     const auth = req.header("Authorization");
     if(!auth || !auth.startsWith('Bearer ')){
         return res.status(403).send('Access Denied!');
     }
 
     const token = auth.split(' ')[1];

     const verified = jwt.verify(token, process.env.JWT_SECRET);
     req.user = verified;
     next();

   } catch (error) {
     res.status(500).json({ error: error.message });
   }
}

export { verifyToken }