export default (req: Request, res) => {
  const url = process.env.REDIRECT_URL;
  res.redirect(url);
};
