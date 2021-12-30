import React, { Component } from "react";
import "./BurgersStyle.css";
import Button from "./Button";

export default class Burger extends Component {
  state2 = [
    { id: 1, quantity: 0, Price: 1.5, name: "lettuce", title: "Лист Салата" },

    {
      id: 2,
      quantity: 0,
      Price: 2,
      name: "pieceOfCheese",
      title: "КУСОЧЕК СЫРА",
    },

    { id: 3, quantity: 0, Price: 4, name: "sliceOfMeat", title: "ЛОМТИК МЯСА" },

    { id: 4, quantity: 0, Price: 0.5, name: "tomato", title: "ПОМИДОРЧИКИ" },
  ];

  state = {
    lettuce: 0,
    pieceOfCheese: 0,
    sliceOfMeat: 0,
    tomato: 0,
    lettucePrice: 1.5,
    pieceOfCheesePrice: 2,
    sliceOfMeatPrice: 4,
    tomatoPrice: 0.5,
  };

  addRemoveIngredient = (action, ingredient) => {
    let { lettuce, pieceOfCheese, sliceOfMeat, tomato } = this.state;

    let stateValue;

    switch (ingredient) {
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      case "pieceOfCheese": {
        stateValue = pieceOfCheese;
        break;
      }
      case "sliceOfMeat": {
        stateValue = sliceOfMeat;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      default:
        break;
    }
    if (action == "add") {
      stateValue += 1;
    } else {
      stateValue -= 1;
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });
    // console.log(ingredient);
  };

  burgerContent = () => {
    let { lettuce, pieceOfCheese, sliceOfMeat, tomato } = this.state;
    let burger = [];

    //  pomirdo
    for (let i = 0; i < tomato; i++) {
      burger.push(<div className="orderedTomato" key={burger.length}></div>);
    }
    // pomidor

    //  salat
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div className="orderedLettuce" key={burger.length}></div>);
    }
    // salat

    // cheese
    for (let i = 0; i < pieceOfCheese; i++) {
      burger.push(<div className="orderedCheese" key={burger.length}></div>);
    }
    // cheese

    // meat
    for (let i = 0; i < sliceOfMeat; i++) {
      burger.push(<div className="orderedMeat" key={burger.length}></div>);
    }
    // meat
    return burger;
  };

  render() {
    let burgerPrice =
      this.state.lettuce * this.state.lettucePrice +
      this.state.pieceOfCheese * this.state.pieceOfCheesePrice +
      this.state.sliceOfMeat * this.state.sliceOfMeatPrice +
      this.state.tomato * this.state.tomatoPrice;

    const interfacee = this.state2.map((ing) => (
      <React.Fragment key={ing.id}>
        <p>
          {ing.title} X {ing.quantity} $
        </p>
        <div className="ingredientsBtnBlock">
          <Button
            sign="добавить"
            cName="ingredientsButton"
            func={() => this.addRemoveIngredient("add", ing.name)}
          />
          <Button
            sign="удалить"
            cName={
              "ingredientsButton " +
              (this.state[ing.name] ? "" : "buttonDisabled")
            }
            func={() => this.addRemoveIngredient("remove", ing.name)}
          />
        </div>
        <div className="productTab"></div>
      </React.Fragment>
    ));

    const ingredientsBlock = this.state2.map((ing) => (
      <React.Fragment key={ing.id}>
        <p>
          {ing.title} X {this.state[ing.name]}
        </p>
        <div className="productTab"></div>
      </React.Fragment>
    ));

    return (
      <>
        <div className="burgerIngredients">
          <div className="top"></div>

          {this.burgerContent()}
          <div className="bot"></div>
        </div>
        <div className="ingredientsBlock">
          {interfacee}
          <div className="productTab">
            <h1>Список продуктов:</h1>
            {ingredientsBlock}
          </div>
          <h1>Заплатите {burgerPrice}$ </h1>
        </div>
      </>
    );
  }
}
