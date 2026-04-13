# playwright-e2e-framework
/*
Automation Scenario Steps - Demoblaze
1. Launch browser using reusable setup method - Browser should launch without hardcoding driver path.
2. Open https://www.demoblaze.com/ - Page title should contain 'STORE'.
3. Click on 'Laptops' category - Only laptop products should be visible.
4. Capture all laptop names and prices dynamically - List should not be empty.
5. Convert prices to integers and store in List - No string comparison allowed.
6. Calculate Total, Average, Minimum & Maximum price - Values should be logically correct.
7. Print top 2 most expensive laptops - Sorting logic should be used.
8. Select the second most expensive laptop dynamically - Should not use fixed index.
9. Add product to cart & handle alert - Alert should be handled properly.
10. Navigate to Cart - Product should be present.
11. Verify cart price equals selected product price - Assertion should pass.
12. Go back and add one phone product - Both products visible in cart.
13. Capture cart total amount - Value should be dynamically fetched.
14. Verify cart total = sum of individual product prices - Must use calculation logic.
15. Click Place Order - Order modal should open.
16. Fill all details using random data generator method - No hardcoded test data.
17. Click Purchase - Confirmation popup should appear.
18. Capture order confirmation amount - Amount should match cart total.
19. Verify confirmation message contains 'Thank you' - Assertion validation.
20. (Bonus) Implement TestNG with @DataProvider for category selection - Test should run for Phones & Laptops.

*/
