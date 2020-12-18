import React, { useState } from "react";
import { Button, Col, Input, Label, Row } from "reactstrap";
import { ArrowDownUp } from "react-bootstrap-icons";

export interface ExchangeFormProps {
  planet?: string;
}

export function ExchangeForm({ planet }: ExchangeFormProps) {
  const [sellAmount, setSellAmount] = useState("0");
  const [buyAmount, setBuyAmount] = useState("0");
  const [sellResourceType, setSellResourceType] = useState("0");
  const [buyResourceType, setBuyResourceType] = useState("0");

  const currencySwitcher = () => {
    const localSellResourceType = sellResourceType;
    setSellResourceType(buyResourceType);
    setBuyResourceType(localSellResourceType);
  };

  return (
    <div className={"exchange-card"}>
      <Label className={"exchange-card-label"}>You sell</Label>
      <Row>
        <Col sm={7}>
          <div className={"exchange-card-input"}>
            <Input
              type="text"
              placeholder="0"
              value={sellAmount}
              onChange={(event) => setSellAmount(event.target.value)}
            />
          </div>
        </Col>
        <Col sm={3}>
          <div className={"exchange-card-select"}>
            <Input
              type="select"
              value={sellResourceType}
              onChange={(event) => setSellResourceType(event.target.value)}
            >
              <option value="0">Gold</option>
              <option value="1">Fuel</option>
              <option value="2">Metal</option>
            </Input>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className={"switchButton"}>
            <Button onClick={currencySwitcher}>
              <ArrowDownUp size={24} />
            </Button>
          </div>
        </Col>
      </Row>
      <Label className={"exchange-card-label"}>You buy</Label>
      <Row>
        <Col sm={7}>
          <div className={"exchange-card-input"}>
            <Input
              type="text"
              placeholder="Enter email"
              value={buyAmount}
              onChange={(event) => setBuyAmount(event.target.value)}
            />
          </div>
        </Col>
        <Col sm={3}>
          <div className={"exchange-card-select"}>
            <Input
              type="select"
              value={buyResourceType}
              onChange={(event) => setBuyResourceType(event.target.value)}
            >
              <option value="0">Gold</option>
              <option value="1">Fuel</option>
              <option value="2">Metal</option>
            </Input>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10} style={{ textAlign: "center" }}>
          <Button className={"changeButton"} type="submit">
            Change
          </Button>
        </Col>
      </Row>
    </div>
  );
}
