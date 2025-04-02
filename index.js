
        document.getElementById('userForm').addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Get form elements
            const form = e.target;
            const button = form.querySelector('button');
            const inputs = form.elements;
           
            // Show loading state
            button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Generating Insights...`;
            button.disabled = true;
    
            // Collect user data
            const userData = {
                name: inputs[0].value,
                email: inputs[1].value,
                interest: inputs[2].value
            };
    
            // Simulate AI processing
            setTimeout(() => {
                // Generate insights
                const insights = generateInsights(userData);
               
                // Update insights section
                const insightsContainer = document.querySelector('.insights-container');
                insightsContainer.innerHTML = insights;
               
                // Reset button
                button.innerHTML = `Generate Insights <i class="fas fa-arrow-right"></i>`;
                button.disabled = false;
            }, 2000);
        });
    
        function generateInsights(user) {
            const interestInsights = {
                'Business Analytics': [
                    'Market trend predictions for next quarter',
                    'Customer behavior pattern detection',
                    'Revenue optimization opportunities'
                ],
                'Health & Wellness': [
                    'Personalized fitness recommendations',
                    'Nutritional balance analysis',
                    'Stress pattern recognition'
                ],
                'Financial Planning': [
                    'Investment risk assessment',
                    'Retirement savings projection',
                    'Expense optimization strategies'
                ],
                'Career Development': [
                    'Skill gap analysis',
                    'Industry growth opportunities',
                    'Networking optimization plan'
                ]
            };
    
            return `
                <div class="insight-card">
                    <img src="the ai union.jpg" class="floating-chart">
                    <h3>Personalized ${user.interest} Insights</h3>
                    <p>Hello ${user.name}, based on your interest in ${user.interest}:</p>
                    <ul>
                        ${interestInsights[user.interest].map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
                <div class="insight-card">
                    <img src="the ai union.jpg" class="floating-chart">
                    <h3>Email Analysis</h3>
                    <p>Patterns detected in ${user.email.split('@')[1]} users:</p>
                    <ul>
                        <li>Common behavioral traits</li>
                        <li>Optimal engagement times</li>
                        <li>Personalization suggestions</li>
                    </ul>
                </div>
                <div class="insight-card">
                    <img src="the ai union.jpg" class="floating-chart">
                    <h3>Action Plan</h3>
                    <p>Recommended next steps for ${user.name.split(' ')[0]}:</p>
                    <ul>
                        <li>Weekly progress tracking</li>
                        <li>Expert connections to make</li>
                        <li>Resource recommendations</li>
                    </ul>
                </div>
            `;
        }
   