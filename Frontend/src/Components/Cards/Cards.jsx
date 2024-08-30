import React from 'react'
import "../Cards/Cards.css"
import { IoIosArrowRoundForward } from "react-icons/io";

const Cards = () => {
  return (
    <section className="cards-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="card-details">
              <h1>Personalize your credit card</h1>
              <p>Create your design or choose from number of amazing and unique existing designs.
                With our personalized credit cards, you can choose from a variety of designs and add
                your own photos or artwork to make your card truly one-of-a-kind. You can also select
                the rewards program that best suits your spending habits and earn points or cashback on every purchase.</p>
              <a href="" style={{color:"inherit", textDecoration:"none"}}>Learn more <IoIosArrowRoundForward /></a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card-image">
              <img src="card.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="card-image">
              <img src="invest.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-details">
              <h1>Investments made simple</h1>
              <p>Our experienced financial advisors are here to guide you through the investment process,
                helping you select the best options for your goals and risk tolerance. We offer a wide variety of
                investment products, including mutual funds, ETFs, stocks, and bonds, so you can build a diversified
                portfolio that suits your needs.</p>
                <a href="" style={{color:"inherit", textDecoration:"none"}}>Learn more <IoIosArrowRoundForward /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
