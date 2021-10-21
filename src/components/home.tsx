import React, { useState } from "react";
import {
  Row,
  Col,
  Tooltip,
  Jumbotron,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import {
  DeviceDesktopIcon,
  EyeIcon,
  ChevronDownIcon,
} from "@primer/octicons-react";

export const Home = () => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const toggle00 = () => setTooltipOpen(!tooltipOpen);
  const [popoverOpen01, setPopoverOpen01] = useState<boolean>(false);
  const toggle01 = () => setPopoverOpen01(!popoverOpen01);
  const [popoverOpen02, setPopoverOpen02] = useState<boolean>(false);
  const toggle02 = () => setPopoverOpen02(!popoverOpen02);
  const [popoverOpen03, setPopoverOpen03] = useState<boolean>(false);
  const toggle03 = () => setPopoverOpen03(!popoverOpen03);
  return (
    <div>
      <div>
        <Jumbotron>
          <h1 className="display-3">ホーム</h1>
          <p className="lead">管理しているサイトの一覧を表示します。</p>
          <hr className="my-2" />
          <p>下記ボタンより新しいサイトが作れます。</p>
          <p className="lead">
            <Button color="success" id="tooltip">
              新しくサイトを作る。（ツールチップ）
            </Button>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="tooltip"
              toggle={toggle00}
            >
              ごめん！準備中なのー
            </Tooltip>
          </p>
        </Jumbotron>
      </div>

      <Row className="border shadow-sm mb-2 d-flex align-items-center rounded">
        <Col xl="6">
          <Row className="d-flex align-items-center pt-2 pb-2">
            <Col xs="4">
              <img
                className="img-responsive"
                src="https://placehold.jp/150x150.png"
                alt=""
              />
            </Col>
            <Col xs="8">
              <p>
                <strong>サイトタイトル</strong>
                <br />
                <small>ここには詳細や説明文が入ります。</small>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xl="6" className="pt-2 pb-2">
          <div className="d-flex justify-content-end">
            <span className="mr-1">
              <Button className="mr-1" color="secondary" id="b1" type="button">
                管理 <ChevronDownIcon />
              </Button>
              　
              <Popover
                placement="bottom"
                target="b1"
                toggle={toggle01}
                isOpen={popoverOpen01}
              >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </PopoverBody>
              </Popover>
            </span>
            <div>
              <Button outline color="success">
                プレビュー <EyeIcon />
              </Button>
              　
            </div>
            <div>
              <Button outline color="success">
                公開 <DeviceDesktopIcon />{" "}
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="border shadow-sm mb-2 d-flex align-items-center rounded">
        <Col xl="6">
          <Row className="d-flex align-items-center pt-2 pb-2">
            <Col xs="4">
              <img
                className="img-responsive"
                src="https://placehold.jp/150x150.png"
                alt=""
              />
            </Col>
            <Col xs="8">
              <p>
                <strong>サイトタイトル</strong>
                <br />
                <small>ここには詳細や説明文が入ります。</small>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xl="6" className="pt-2 pb-2">
          <div className="d-flex justify-content-end">
            <span className="mr-1">
              <Button className="mr-1" color="secondary" id="b2" type="button">
                管理 <ChevronDownIcon />
              </Button>
              　
              <Popover
                placement="bottom"
                target="b2"
                toggle={toggle02}
                isOpen={popoverOpen02}
              >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </PopoverBody>
              </Popover>
            </span>
            <div>
              <Button outline color="success">
                プレビュー <EyeIcon />
              </Button>
              　
            </div>
            <div>
              <Button outline color="success">
                公開 <DeviceDesktopIcon />{" "}
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="border shadow-sm mb-2 d-flex align-items-center rounded">
        <Col xl="6">
          <Row className="d-flex align-items-center pt-2 pb-2">
            <Col xs="4">
              <img
                className="img-responsive"
                src="https://placehold.jp/150x150.png"
                alt=""
              />
            </Col>
            <Col xs="8">
              <p>
                <strong>サイトタイトル</strong>
                <br />
                <small>ここには詳細や説明文が入ります。</small>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xl="6" className="pt-2 pb-2">
          <div className="d-flex justify-content-end">
            <span className="mr-1">
              <Button className="mr-1" color="secondary" id="b3" type="button">
                管理 <ChevronDownIcon />
              </Button>
              　
              <Popover
                placement="bottom"
                target="b3"
                toggle={toggle03}
                isOpen={popoverOpen03}
              >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </PopoverBody>
              </Popover>
            </span>
            <div>
              <Button outline color="success">
                プレビュー <EyeIcon />
              </Button>
              　
            </div>
            <div>
              <Button outline color="success">
                公開 <DeviceDesktopIcon />{" "}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
