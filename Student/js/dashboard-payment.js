function getPayment() {
    let payment = document.getElementById('showDashNoticeData');

    fetch("/dashboard-payment.html")
        .then(res => res.text())
        .then(data => {
            payment.innerHTML = data;
            showPayment();
        });
}




function showPayment() {
    let div = document.getElementById('paymentId');
    fetch("/dashboard-payment.html")
        .then(res => res.text())
        .then(data => {
            data += `<div class="p-3">
            <h2 class="card-header border-3 ">
                Payment
            </h2>
        
            <div class="card">
                <div class="card-body">
                    <div class="row d-flex justify-content-center pb-5">
                        <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
        
                            <div class="pt-2">
                                <div class="d-flex pb-2">
                                    <div>
                                        <p>
                                            <b>Patient Balance <span class="text-success">$13.24</span></b>
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <p class="text-primary">
                                            <i class="fas fa-plus-circle text-primary pe-1"></i>Add payment card
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    This is an estimate for the portion of your order (not covered by
                                    insurance) due today . once insurance finalizes their review refunds
                                    and/or balances will reconcile automatically.
                                </p>
                                <form class="pb-3">
                                    <div class="d-flex flex-row pb-3">
                                        <div class="d-flex align-items-center pe-2">
                                            <input class="form-check-input" type="radio" name="radioNoLabel"
                                                id="radioNoLabel1" value="" aria-label="..." checked />
                                        </div>
                                        <div class="rounded border d-flex w-100 p-3 align-items-center">
                                            <p class="mb-0">
                                                <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debit
                                                Card
                                            </p>
                                            <div class="ms-auto">************3456</div>
                                        </div>
                                    </div>
        
                                    <div class="d-flex flex-row">
                                        <div class="d-flex align-items-center pe-2">
                                            <input class="form-check-input" type="radio" name="radioNoLabel"
                                                id="radioNoLabel2" value="" aria-label="..." />
                                        </div>
                                        <div class="rounded border d-flex w-100 p-3 align-items-center">
                                            <p class="mb-0">
                                                <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
                                                Office
                                            </p>
                                            <div class="ms-auto">************1038</div>
                                        </div>
                                    </div>
                                </form>
                                <input type="button" value="Proceed to payment" class="btn btn-primary btn-block btn-lg" />
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>`;
            div.innerHTML = data;
        })
}



