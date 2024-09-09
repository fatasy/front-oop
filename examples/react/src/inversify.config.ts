import { Container } from "inversify";
import { IUserRepository, UserRepository } from "./repository/user-repository";
import { FetchHttpClient } from "./services/http/axios-http-client";
import { HttpService, IHttpService } from "./services/http/http-service";
import { IHttpClient } from "./services/http/i-http-service";
import { IUserHttp, UserHttp } from "./services/http/user-http";

const container = new Container();

// Vinculando a interface IHttpClient à implementação AxiosHttpClient
container.bind<IHttpClient>("IHttpClient").to(FetchHttpClient);

// Vinculando a interface IHttpService à implementação HttpService
container.bind<IHttpService>("HttpService").to(HttpService);

// Bind the UserHttp service
container.bind<IUserHttp>("UserHttp").to(UserHttp);

// Bind the UserRepository implementation
container.bind<IUserRepository>("UserRepository").to(UserRepository);

export { container };
