import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img
        height={160}
        src="https://source.unsplash.com/NE0XGVKTmcA"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>mail</dt>
        <dd>ffff.com</dd>
        <dt>tel</dt>
        <dd>0987654321</dd>
        <dt>会社名</dt>
        <dd>テスト</dd>
        <dt>WEB</dt>
        <dd>テスト</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
