import StartUp from "./startUp";

let port = "4000";

StartUp.app.listen(port, function () {
  console.log(`Servidor rodando na porta: ${port}`);
});
