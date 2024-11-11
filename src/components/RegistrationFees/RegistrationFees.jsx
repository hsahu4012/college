import React from 'react';
import './RegistrationFees.css'

const RegistrationFees = () => {
    const plans = [
        {
            title: "EARLY BIRD PAYMENT",
            categories: [
                { name: "Industry", nonIndian: "USD 150", indian: "INR 12,000" },
                { name: "Academia", nonIndian: "USD 120", indian: "INR 10,000" },
                { name: "Students", nonIndian: "USD 100", indian: "INR 8,000" },
                { name: "Listeners", nonIndian: "USD 50", indian: "INR 2,000" }
            ]
        },
        {
            title: "PAYMENT AFTER DUE DATE",
            categories: [
                { name: "Industry", nonIndian: "USD 170", indian: "INR 13,000" },
                { name: "Academia", nonIndian: "USD 130", indian: "INR 11,000" },
                { name: "Students", nonIndian: "USD 110", indian: "INR 9,000" },
                { name: "Listeners", nonIndian: "USD 60", indian: "INR 3,000" }
            ]
        }
    ];

    return (
        <div className="registration" id="registration-section">
            <div className="registration__label">REGISTRATION FEES</div>
            <h1 className="registration__title">Participants Registration</h1>

            <div className="registration__grid">
                {plans.map((plan, index) => (
                    <div key={index} className="pricing-card">
                        <div className="pricing-card__header">
                            <h2 className="pricing-card__title">{plan.title}</h2>
                            <div className="pricing-card__wave"></div>
                        </div>

                        <div className="pricing-card__content">
                            <table className="pricing-table">
                                <thead className="pricing-table__head">
                                    <tr>
                                        <th className="pricing-table__header">Categories</th>
                                        <th className="pricing-table__header">Non-Indian</th>
                                        <th className="pricing-table__header">Indian</th>
                                    </tr>
                                </thead>
                                <tbody className="pricing-table__body">
                                    {plan.categories.map((category, idx) => (
                                        <tr key={idx} className="pricing-table__row">
                                            <td className="pricing-table__cell">{category.name}</td>
                                            <td className="pricing-table__cell">{category.nonIndian}</td>
                                            <td className="pricing-table__cell">{category.indian}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <p className="pricing-card__note">
                                Only three authors are included in the registration cost listed above.
                                A non-indian resident will pay USD 20 more for more than three authors,
                                while an indian resident would pay INR 500 more. Participation certificate
                                will be provided to all co-authors.
                            </p>

                            <button className="pricing-card__button">MAKE PAYMENT</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RegistrationFees;