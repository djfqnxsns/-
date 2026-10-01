// ==========================================
// げんじぶ 曲
// ==========================================

const songs = [

    ["Ebidence", "BATTLE STREET"],
    ["Show Time!!", "BATTLE STREET"],
    ["原因は自分にある。", "원인은 자신에게 있다."],
    ["ギミギミラブ", "Give me Give me Love"],
    ["ラベンダー", "라벤더"],
    ["Up and Down", ""],
    ["嗜好に関する世論調査", "기호에 관한 여론조사"],
    ["Joy to the world", ""],
    ["ジュトゥブ", "쥬투브"],
    ["時速3km", "시속 3km"],
    ["Foxy Grape", ""],
    ["白のための瘡蓋狂想曲", "여백을 위한 부스럼랩소디"],
    ["THE EMPATHY", ""],
    ["GOD 釈迦にHip-Hop", "GOD 부처님께 Hip-Hop"],
    ["夏の二等辺大三角形", "여름의 이등변 대삼각형"],
    ["柘榴", "석류"],
    ["嘘から始まる自称系", "거짓말로 시작하는 자칭계"],
    ["In the Nude", ""],
    ["スノウダンス", "스노우댄스"],
    ["夢に唄えば", "꿈에 부르면"],
    ["シェイクスピアに学ぶ恋愛定理", "셰익스피어에게 배우는 연애 정리"],
    ["幽かな夜の夢", "희미한 밤의 꿈"],
    ["黄昏よりも早く疾走れ", "황혼보다도 빨리 질주해"],
    ["犬と猫とミルクにシュガー", "개와 고양이와 우유에 설탕"],
    ["豪雨", "호우"],
    ["以呂波 feat. fox capture plan", "이로하"],
    ["半分相逢傘", "반쪽의 우산 아래"],
    ["灼けゆく青", "타들어가는 파랑"],
    ["J*O*K*E*R", ""],
    ["0to1の幻想", "0to1의 환상"],
    ["夜夏", "여름밤"],
    ["藍色閃光", "남색섬광"],
    ["無限シニシズム", "무한 시니시즘"],
    ["原因は君にもある。", "원인은 너에게도 있다."],
    ["魔法をかけて", "마법을 걸고"],
    ["Q", ""],
    ["貴方に溺れて、僕は潤んで。", "당신에게 빠져서, 나는 촉촉해지고"],
    ["青、その他", "파랑, 그 외"],
    ["Run away", ""],
    ["Lion", ""],
    ["結末は次のトラフィックライト", "결말은 다음 트래픽 라이트"],
    ["チョコループ", "초코 루프"],
    ["キミヲナクシテ", "너를 잃고"],
    ["545", ""],
    ["桜Ground", "벚꽃 Ground"],
    ["僕らの世界・物語", "우리들의 세계·이야기"],
    ["マルチバースアドベンチャー", "멀티버스 어드벤처"],
    ["ケイカクドヲリ", "계획대로"],
    ["美しい人", "아름다운 사람"],
    ["推論的に宇宙人", "추론적으로 외계인"],
    ["ダイヤモンドリリー", "다이아몬드 릴리"],
    ["『誰も知らない歌』", "아무도 모르는 노래"],
    ["アビスと清らな銀世界", "어비스와 맑은 은세계"],
    ["Operation Ego", ""],
    ["遊戯的反逆ノススメ", "유희적 반역의 추천"],
    ["小説ならば", "소설이라면"],
    ["Go to the Moon", ""],
    ["因果応報アンチノミー", "인과응보 앙치노미"],
    ["LLL", ""],
    ["夢之相 - イメノアイ", "이메노아이"],
    ["Mania", ""],
    ["蝋燭", "촛불"],
    ["フィナーレ", "피날레"],
    ["方程式は恋模様", "방정식은 사랑 모양"],
    ["P-P-P-PERO", ""],
    ["カラフるワンダフル", "컬러풀 원더풀"],
    ["in the Fate", ""],
    ["Paradox Re:Write", ""],
    ["museum:0", ""],
    ["多分、僕のソネット", "아마도, 나의 소넷"],
    ["貴方らしく", "당신답게"],
    ["ニヒリズムプリズム", "니힐리즘 프리즘"],
    ["疾走", "질주"],
    ["愛無常", "애무상"],
    ["Silence", ""],
    ["パラノイドランデブー", "파라노이드 랑데부"],
    ["ビネットネット", "비네트네트"],
    ["希望的観測の定義", "희망적 관측의 정의"],
    ["トレモロ", "토레모로"],
    ["NOW", ""],
    ["火宴", "화연"],
    ["Mr.Android", ""],
    ["鳴らして、シンバル", "울려, 심벌"],
    ["放課後ギュッと", "방과후 꽉"],
    ["浪漫人", "낭만인"]

];


// ==========================================
// 변수
// ==========================================

let players = [];
let winners = [];

let eliminated = [];

let currentRound = 1;

let leftSong = null;
let rightSong = null;


// ==========================================
// 랜덤 셔플
// ==========================================

function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


// ==========================================
// 게임 시작
// ==========================================

function startGame() {

    players = shuffle(songs);

    winners = [];

    eliminated = [];

    currentRound = 1;

    document.getElementById("startScreen")
        .style.display = "none";

    document.getElementById("resultScreen")
        .style.display = "none";

    document.getElementById("gameScreen")
        .style.display = "flex";

    startRound();
}


// ==========================================
// 라운드 시작
// ==========================================

function startRound() {

    winners = [];

    players = shuffle(players);

    showNextMatch();
}


// ==========================================
// 다음 대결
// ==========================================

function showNextMatch() {

    // 라운드가 끝났으면
    if (players.length === 0) {

        endRound();

        return;
    }


    // 첫 번째 곡
    leftSong = players.shift();


    // 홀수라서 혼자 남은 경우
    // → 자동으로 다음 라운드 진출
    if (players.length === 0) {

        winners.push(leftSong);

        showNextMatch();

        return;
    }


    // 두 번째 곡
    rightSong = players.shift();


    // 화면 표시
    document.getElementById("leftTitle")
        .textContent = leftSong[0];

    document.getElementById("leftSub")
        .textContent = leftSong[1];


    document.getElementById("rightTitle")
        .textContent = rightSong[0];

    document.getElementById("rightSub")
        .textContent = rightSong[1];


    const matchNumber =
        winners.length + 1;


    document.getElementById("roundInfo")
        .textContent =
        `${currentRound}라운드 · 대결 중`;
}


// ==========================================
// 선택
// ==========================================

function selectSong(side) {

    // 왼쪽 선택
    if (side === 0) {

        winners.push(leftSong);

        eliminated.push({
            song: rightSong,
            round: currentRound
        });

    }

    // 오른쪽 선택
    else {

        winners.push(rightSong);

        eliminated.push({
            song: leftSong,
            round: currentRound
        });

    }


    // 다음 대결
    showNextMatch();
}


// ==========================================
// 라운드 종료
// ==========================================

function endRound() {

    // 최종 우승
    if (winners.length === 1) {

        const champion = winners[0];

        makeRanking(champion);

        return;
    }


    // 다음 라운드
    players = winners;

    currentRound++;

    startRound();
}


// ==========================================
// 최종 순위 만들기
// ==========================================

function makeRanking(champion) {

    /*
      본선에서 오래 살아남은 곡일수록
      높은 순위가 되도록 함.
  
      같은 라운드에서 탈락한 곡들은
      랜덤으로 배치.
    */

    let groups = {};


    eliminated.forEach(item => {

        if (!groups[item.round]) {
            groups[item.round] = [];
        }

        groups[item.round].push(item.song);

    });


    let ranking = [champion];


    // 가장 마지막 라운드 탈락자부터
    const rounds =
        Object.keys(groups)
            .map(Number)
            .sort((a, b) => b - a);


    rounds.forEach(round => {

        ranking.push(
            ...shuffle(groups[round])
        );

    });


    showResult(ranking);
}


// ==========================================
// 결과
// ==========================================

function showResult(ranking) {

    document.getElementById("gameScreen")
        .style.display = "none";

    document.getElementById("resultScreen")
        .style.display = "flex";


    const box =
        document.getElementById("ranking");

    box.innerHTML = "";


    ranking.forEach((song, index) => {

        const row =
            document.createElement("div");

        row.className = "rank";


        const number =
            document.createElement("div");

        number.className = "rankNumber";

        number.textContent =
            `${index + 1}위`;


        const info =
            document.createElement("div");


        const title =
            document.createElement("div");

        title.className = "rankTitle";

        title.textContent = song[0];


        info.appendChild(title);


        if (song[1]) {

            const sub =
                document.createElement("div");

            sub.className = "rankSub";

            sub.textContent = song[1];

            info.appendChild(sub);

        }


        row.appendChild(number);
        row.appendChild(info);

        box.appendChild(row);

    });
}


// ==========================================
// 곡 수 확인
// ==========================================

document.getElementById("songCount")
    .textContent =
    `등록된 곡: ${songs.length}곡`;

console.log(
    "등록된 곡 수:",
    songs.length
);

