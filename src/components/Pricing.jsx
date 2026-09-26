import { pricingPlans } from "../data/portfolioData";

function Pricing() {
  return (
    <section className="content-section pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Services / Pricing</p>
          <h2>Flexible support for both small and serious business needs.</h2>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card pricing-${plan.accent}`}
              key={plan.tier}
            >
              <div className="pricing-header">
                <span className="pricing-label">{plan.label}</span>
                <h3>{plan.tier}</h3>
                <p className="price">{plan.price}</p>
              </div>

              <p className="pricing-description">{plan.description}</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="button button-small" href="#contact">
                Enquire
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
