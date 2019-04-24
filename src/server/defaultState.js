export const defaultState = {
    users: [{
        id: 'U1',
        name: 'Dev'
    },
    {
        id: 'U2',
        name: 'Dov'
    }],
    groups: [{
        name: 'To do',
        id: 'G1',
        owner: 'U1'
    },
    {
        name: 'To do 2',
        id: 'G2',
        owner: 'U2'
    }],
    tasks: [{
        name: 'do tests',
        id: 'T1',
        group: 'G1',
        owner: 'U1',
        isComplete: false
    },
    {
        name: 'fun things to do',
        id: 'T2',
        group: 'G2',
        owner: 'U2',
        isComplete: true
    }],
    comments: [{
        owner: 'U1',
        id: 'C1',
        task: 'T1',
        content: 'good work!'
    }]
}