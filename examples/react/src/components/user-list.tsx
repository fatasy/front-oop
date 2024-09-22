import { useRepository } from "../hooks/use-repository";
import { useUsers } from "../hooks/use-users";

export const UserList = () => {
  const { userRepository } = useRepository();
  const { data: response } = useUsers(userRepository);
  const { data } = response ?? {};

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  );
};
