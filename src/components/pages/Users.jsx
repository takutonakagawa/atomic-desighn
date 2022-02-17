import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "testtest.com",
    phone: "124567890",
    company: {
      name: "testcompany"
    },
    website: "tatattattatata.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
`;
