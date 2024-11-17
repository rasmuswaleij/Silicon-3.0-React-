import React from "react";

const Features = () => {
  return (
    <section className="app-features-test">
      <div className="container">
        <img src="/assets/images/3d-iphone.svg" alt="" className="desktop" />
        <div className="">
          <h2 className="fs-secondary-heading fw-extra-bold">App Features</h2>
          <p className="half-opacity-p fs-250">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <ul>
            <li>
              <img src="/assets/images/credit-card.svg" alt="" />
              <div>
                <h3>Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </li>
            <li>
              <img src="/assets/images/shield.svg" alt="" />
              <div>
                <h3>Data Security</h3>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.
                </p>
              </div>
            </li>
            <li>
              <img src="/assets/images/bars-graphic.svg" alt="" />
              <div>
                <h3>Cost Statistics</h3>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </li>
            <li>
              <img src="/assets/images/communication.svg" alt="" />
              <div>
                <h3>Support 24/7</h3>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in aenean
                  quam mauris.
                </p>
              </div>
            </li>
            <li>
              <img src="/assets/images/wallet.svg" alt="" />
              <div>
                <h3>Regular Cashback</h3>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet eleifend.
                </p>
              </div>
            </li>
            <li>
              <img src="/assets/images/vector.svg" alt="" />
              <div>
                <h3>Top Standards</h3>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
