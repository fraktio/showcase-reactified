import Reflux from "reflux";
import Immutable from "immutable";

const Actions = Reflux.createActions({
    "loadCases": { children: ['complete', 'failed'] },
});


Actions.loadCases.listen(function() {

    const cases = Immutable.List([

        {
            id: 1,
            name: 'Pekkiksen suuruuden ylistyksen saitti',
        },
        {
            id: 2,
            name: 'Hauskan Joonaksen elokuvasaitti',
        },
        {
            id: 3,
            name: 'Henri Vesalan peräruiskepuhelin',
        }
    ]);

    setTimeout(() => {
        this.complete(cases);
    }, 1000);


});

export default Actions;
