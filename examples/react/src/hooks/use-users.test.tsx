import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react-hooks";
import * as React from "react";

import { useUsers } from "./use-users";

import { Providers } from "../components/providers";
import { IUserRepository } from "../repository/user-repository";

const mockUserRepository: IUserRepository = {
  getUsers: jest.fn().mockResolvedValue([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]),
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Providers>{children}</Providers>
);

describe("useUsers", () => {
  // beforeAll(() => {
  //   container.unbind("UserRepository");
  //   container
  //     .bind<IUserRepository>("UserRepository")
  //     .toConstantValue(mockUserRepository);
  // });

  it("fetches and returns users", async () => {
    const { result, waitFor } = renderHook(() => useUsers(mockUserRepository), {
      wrapper,
    });

    // Ensure the initial state
    expect(result.current.isLoading).toBe(true);

    // Wait for the data to be fetched
    await waitFor(() => result.current.isSuccess);

    // Check the result
    expect(result.current.data).toEqual([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]);
    expect(result.current.isLoading).toBe(false);
  });
});
