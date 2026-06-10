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
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--text-dark-primary)', lineHeight: 1.1, margin: 0, fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
          Tailored <span style={{ fontFamily: '"Dancing Script", cursive', color: 'var(--gold)', fontSize: '1.2em' }}>Offerings</span>
        </h2>
        <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', color: 'var(--text-light-secondary)', lineHeight: 1.5, fontFamily: 'var(--font-sans)' }}>
          Choose the artistry experience closest to your ceremony, or let us curate a completely custom package for you.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <article
              key={plan.id}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.04)',
                borderRadius: '1rem',
                padding: '2rem 1.8rem',
                boxShadow: '0 15px 30px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.06)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.02)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-dark-primary)', margin: 0, fontFamily: 'var(--font-serif)' }}>{plan.name}</h3>
                  <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666' }}>Investment from</span>
                </div>
              </div>

              <div style={{ fontSize: '2rem', color: 'var(--text-dark-primary)', fontFamily: 'var(--font-display)', marginBottom: '1rem', lineHeight: 1 }}>
                {typeof plan.price === 'number' ? `₹${plan.price.toLocaleString('en-IN')}` : plan.price}
              </div>

              <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                {plan.description}
              </p>

              <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.2rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-dark-primary)', display: 'block', marginBottom: '1rem', fontWeight: 600 }}>Includes</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {plan.features.map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle size={14} strokeWidth={2} color="var(--gold)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#555555', lineHeight: 1.4 }}>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textDecoration: 'none',
                  padding: '1rem',
                  width: '100%',
                  border: '1px solid var(--text-dark-primary)',
                  color: 'var(--text-dark-primary)',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--text-dark-primary)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-dark-primary)';
                }}
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
