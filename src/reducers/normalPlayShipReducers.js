export default function normalPlayShipReducer(
    state = set(), action
) {
    if (action.type === 'normalreset') {
        state = set()
    }
    return state;
}

function set() {
    const State = [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']
    ];
    let data = getXY();
    const length = [5, 4, 3, 3, 2];
    let times = 0;

    while (times < 5) {
        if (check(data, State, length[times])) {
            putValue(data, State, length[times]);
            times++;
        }
        data = getXY();
    }
    return State;
}

function check(data, State, length) {
    if (data[0] === 1) {
        if (data[1] + length - 1 > 9) {
            return false;
        }
        for (let i = 0; i < length; i++) {
            if (State[data[1] + i][data[2]] === 'O') {
                return false;
            }
        }
    } else {
        if (data[2] + length - 1 > 9) {
            return false;
        }
        for (let i = 0; i < length; i++) {
            if (State[data[1]][data[2] + i] === 'O') {
                return false;
            }
        }
    }
    return true;
}

function putValue(data, State, length) {
    if (data[0] === 1) {
        for (let i = 0; i < length; i++) {
            State[data[1] + i][data[2]] = 'O';
        }
    } else {
        for (let i = 0; i < length; i++) {
            State[data[1]][data[2] + i] = 'O';
        }
    }
}



function getXY() {
    const HorOrVer = Math.round(Math.random());
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [HorOrVer, x, y];
}

