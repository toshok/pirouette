
import { makeEnum } from '../objc';

export let NSComparisonResult = makeEnum({
    getTypeSignature: function() { return "i"; },

    ascending: -1,
    same:       0,
    descending: 1
});
