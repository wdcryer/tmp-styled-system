"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var styled_components_1 = require("styled-components");
require("jest-styled-components");
var styled_system_1 = require("../../styled-system");
var render = function (el) { return react_test_renderer_1["default"].create(el).toJSON(); };
describe('styled-components', function () {
    test('default props can be overridden', function () {
        var Box = styled_components_1["default"]('div')(styled_system_1.space);
        Box.defaultProps = {
            m: 0,
            px: 0,
            py: 0
        };
        var json = render(<Box px={2} m={4}/>);
        expect(json).toHaveStyleRule('padding-left', '8px');
        expect(json).toHaveStyleRule('padding-right', '8px');
        expect(json).toHaveStyleRule('padding-top', '0');
        expect(json).toHaveStyleRule('padding-bottom', '0');
        expect(json).toHaveStyleRule('margin', '32px');
    });
    test('extended components keep their props', function () {
        var Box = styled_components_1["default"]('div')(styled_system_1.space);
        var Card = styled_components_1["default"](Box)(styled_system_1.color);
        var json = render(<Card m={3} color='tomato'/>);
        expect(json).toHaveStyleRule('margin', '16px');
        expect(json).toHaveStyleRule('color', 'tomato');
    });
    test('extended components keep their props with as prop', function () {
        var Box = styled_components_1["default"]('div')(styled_system_1.space);
        var Card = styled_components_1["default"](Box)(styled_system_1.color);
        var json = render(<Card as='header' m={3} color='tomato'/>);
        expect(json).toHaveStyleRule('margin', '16px');
        expect(json).toHaveStyleRule('color', 'tomato');
    });
    test('responsive styles are rendered in the correct order', function () {
        var Box = styled_components_1["default"]('div')(styled_system_1.space);
        var json = render(<Box m={[1, 2, 3]} p={[1, 2, 3]}/>);
        expect(json).toMatchSnapshot();
    });
});
