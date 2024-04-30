import { CheckIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'next-i18next';
import { Button, Card } from 'react-daisyui';

import plans from './data/pricing.json';

const PricingSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-6">
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-center text-4xl font-bold normal-case">
          {t('pricing')}
        </h2>
        <p className="text-center text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {plans.map((plan, index) => {
              return (
                <Card
/** gap:0px;
padding-bottom:8px;
 */                   key={`plan-${index}`}
                  className="rounded-md dark:border-gray-200 border border-gray-300"
                >
                  <Card /** margin-left:8px;
 */ .Body>
                    <Card.Title tag="h2">
                      {plan.currency} {plan.amount} / {plan.duration}
                    </Card.Title>
                    <p>{plan.description}</p>
                    <div className="mt-5">
                      <ul /** gap:8px;
 */ className="flex flex-col space-y-2">
                        {plan.benefits.map(
                          (benefit: string, itemIndex: number) => {
                            return (
                              <li
/** gap:4px;
align-items:flex-start;
margin-top:0px;
 */                                 key={`plan-${index}-benefit-${itemIndex}`}
                                className="flex items-center"
                              >
                                <CheckIcon /** margin-top:2px;
 */ className="h-5 w-5" />
                                <span /** margin-left:0px;
 */ className="ml-1">{benefit}</span>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </Card.Body>
                  <Card /** justify-content:normal;
align-items:normal;
margin-bottom:0px;
margin-top:0px;
margin-left:0px;
margin-right:24px;
 */ .Actions className="justify-center m-2">
                    <Button
/** height:48px;
 */                       color="primary"
                      className="md:w-full w-3/4 rounded-md"
                      size="md"
                    >
                      {t('buy-now')}
                    </Button>
                  </Card.Actions>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
