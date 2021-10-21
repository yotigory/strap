import {
  ListGroup,
  ListGroupItem,
} from "reactstrap";


export const Menu = (props:any) => {
  return (
		<ListGroup>
			<ListGroupItem onClick={ props.onClickMenu } tag="a" data-current="home" href="home" disabled={ props.current === "home" && true}>
			ホーム
		</ListGroupItem>
		<ListGroupItem onClick={ props.onClickMenu } tag="a" data-current="set" href="set" disabled={ props.current === "set" && true}>
			設定
		</ListGroupItem>
		<ListGroupItem onClick={ props.onClickMenu } tag="a" data-current="plan" href="plan" disabled={ props.current === "plan" && true}>
			プラン
		</ListGroupItem>
	</ListGroup>
  );
};
