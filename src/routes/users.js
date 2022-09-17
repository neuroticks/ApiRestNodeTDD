module.exports = () => {

    const findAll = (req, res)=>{
        const users = [
            { nome: "rodrigo", email: "rodrigo@mail.com" }
        ];
        res.status(200).json(users);
      }
      
      const create=(req, res)=>{
        res.status(201).json(req.body)
      }
      
      return { findAll, create }
}