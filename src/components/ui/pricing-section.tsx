import { CheckCircle, type LucideIcon } from 'lucide-react';

export type ServicePlanId = 'bridal' | 'engagement' | 'custom';

export interface PricingPlan {
  id: ServicePlanId;
  name: string;
  price: number | string;
  description: string;
  features: string[];
  actionLabel: string;
  icon: LucideIcon;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const Component = ({ plans }: PricingSectionProps) => {
  return (
    <div className="pricing-section-shell">
      <div className="pricing-section-heading">
        <span className="section-label">Investment</span>
        <h2>Tailored Offerings</h2>
        <p>
          Choose the artistry experience closest to your ceremony, or let us curate a completely custom package for you.
        </p>
      </div>

      <div className="pricing-services-grid">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <article
              key={plan.id}
              className="pricing-service-card"
            >
              <div className="pricing-card-top">
                <div className="pricing-icon-wrap">
                  <Icon size={36} strokeWidth={1.2} />
                </div>
                <div>
                  <h3>{plan.name}</h3>
                  <span>Investment from</span>
                </div>
              </div>

              <div className="pricing-card-price">
                {typeof plan.price === 'number' ? `₹${plan.price.toLocaleString('en-IN')}` : plan.price}
              </div>

              <p className="pricing-card-description">{plan.description}</p>

              <div className="pricing-card-features">
                <span>Includes</span>
                {plan.features.map((feature) => (
                  <div key={feature} className="pricing-feature-row">
                    <CheckCircle size={17} strokeWidth={1.5} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="pricing-card-action"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
              >
                {plan.actionLabel}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
};
