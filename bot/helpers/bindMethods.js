/**
 * Because scoping is hard
 */

function bindMethods(context, methodNames) {
  methodNames.map(function(methodName) {
    context[methodName] = context[methodName].bind(context);
  });
};

module.exports = bindMethods;