function getResult() {
    let result = document.getElementById('showDashNoticeData');

    fetch("/dashboard-result.html")
        .then(res => res.text())
        .then(data => {
            result.innerHTML = data;
            showResult();
        });
}


function showResult() {
    let div = document.getElementById('resultId');
    fetch("/dashboard-result.html")
        .then(res => res.text())
        .then(data => {
            data += `<div class="p-3">
        <h2 class="card-header border-3">
            Result
        </h2>
        <div class="card bg-white">
            <div class="p-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In alias aliquam et? Nulla animi corrupti
                ducimus odio ipsa molestias maxime beatae blanditiis libero consequuntur ad aperiam ipsam aut, vero
                accusamus illum hic nihil! Quasi a sed excepturi aspernatur iste adipisci earum ratione facere,
                consequatur quis, expedita laboriosam, in dolore ab soluta vitae vero veniam nulla harum autem? Aut
                deserunt nulla ab, ducimus reprehenderit commodi corrupti debitis, harum iste numquam dolore sit esse!
                Animi cumque exercitationem nulla accusantium deserunt dignissimos sint, sunt, cum quas, ratione esse?
                Ducimus quas illo reprehenderit non, laborum qui quidem, labore culpa totam, quaerat et quis architecto
                iure est voluptate dolor possimus velit laudantium! Eum iste debitis nihil aperiam temporibus veritatis.
                Incidunt impedit nam cum dolorum, eius doloribus. Eaque ratione doloremque ipsa aspernatur aut
                reiciendis neque accusantium nobis et inventore nam corrupti nisi labore dicta quod magnam quos iste
                omnis cupiditate repellendus id ipsum facilis, temporibus magni? Iure officiis nemo fugiat sit ad
                provident fuga nam, quibusdam error atque culpa voluptatibus rerum ducimus eius eligendi aut dicta in ut
                deleniti consequatur labore. Atque, eum. Soluta qui iure dolor hic cum. Neque odit incidunt culpa
                repellat, vero non doloremque ut, molestiae architecto consequuntur aliquam deleniti consequatur,
                exercitationem quidem?
            </div>
        </div>
        <button class="btn p-1 m-3 btn-primary btn-lg btn-block" onclick="printResult()">Download Result</button>


    </div>`;
    div.innerHTML = data
        })
}

function printResult() {
    window.print();
}