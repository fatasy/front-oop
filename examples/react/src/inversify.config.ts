import { Container } from "inversify";
import { SafeApiCaller } from "./infrastructure/safe-api-caller";
import { IUserRepository, UserRepository } from "./repository/user-repository";

import { AxiosHttpClient } from "./services/http/axios-http-client";
import { IHttpClient } from "./services/http/i-http-service";
import { IUserHttp, UserHttp } from "./services/http/user-http";

const container = new Container();

// Vinculando a interface HttpClient à implementação AxiosHttpClient
container
  .bind<IHttpClient>("HttpClient")
  .to(AxiosHttpClient)
  .inSingletonScope();

container.bind<IUserHttp>("UserHttp").to(UserHttp);

container.bind<SafeApiCaller>("SafeApiCaller").to(SafeApiCaller);

container.bind<IUserRepository>("UserRepository").to(UserRepository);

export { container };
