export interface ValidUser {
  username: string;
  password: string;
  expectedUrl: string;
}

export interface InvalidUser {
  username: string;
  password: string;
  expectedError: string;
}

export const validUser: ValidUser = {
  username:    "tomsmith",
  password:    "SuperSecretPassword!",
  expectedUrl: "/secure",
};

export const invalidUsers: InvalidUser[] = [
  {
    username:      "wronguser",
    password:      "SuperSecretPassword!",
    expectedError: "Your username is invalid",
  },
  {
    username:      "tomsmith",
    password:      "wrongpassword",
    expectedError: "Your password is invalid",
  },
  {
    username:      "",
    password:      "SuperSecretPassword!",
    expectedError: "Your username is invalid",
  },
];
