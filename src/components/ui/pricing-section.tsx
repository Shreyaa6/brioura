import { CheckCircle, type LucideIcon } from 'lucide-react';

export type ServicePlanId = 'bridal' | 'engagement' | 'party';

export interface PricingPlan {
  id: ServicePlanId;
  name: string;
  price: number;
  description: string;
  features: string[];
  actionLabel: string;
  icon: LucideIcon;
}

interface PricingSectionProps {
  selectedPlan: ServicePlanId;
  plans: PricingPlan[];
  onSelectPlan: (plan: ServicePlanId) => void;
}

export const Component = ({ selectedPlan, plans, onSelectPlan }: PricingSectionProps) => {
  return (
    <div className="pricing-section-shell">
      <div className="pricing-section-heading">
        <span className="section-label">Tailored Offerings</span>
        <h2>Bespoke Services</h2>
        <p>
          Choose the artistry experience closest to your ceremony, then refine the estimate with
          add-ons below.
        </p>
      </div>

      <div className="pricing-services-grid">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isSelected = selectedPlan === plan.id;

          return (
            <article
              key={plan.id}
              className={`pricing-service-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectPlan(plan.id)}
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
                ₹{plan.price.toLocaleString('en-IN')}
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

              <button
                type="button"
                className="pricing-card-action"
                aria-pressed={isSelected}
                onClick={(event) => {
                  event.stopPropagation();
                  onSelectPlan(plan.id);
                }}
              >
                {isSelected ? 'Selected' : plan.actionLabel}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};
