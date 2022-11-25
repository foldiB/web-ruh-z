let emberek = [
    {
        nev: "Péter",
        magassag: 165
    },
    {
        nev: "Zoli",
        magassag: 180
    },
    {
        nev: "Feri",
        magassag: 175
    }

];

function tableRender(){
    let tableHtml = `"";
    for (const ember of emberek) {
    tableHtml += <tr>;
        for (const key in ember) {
            tableHtml += <td>${ember[key]}</td>
        }
        tableHtml += </tr>;
    };`
    document.getElementById("tbody").innerHTML = tableHtml;
}

tableRender();