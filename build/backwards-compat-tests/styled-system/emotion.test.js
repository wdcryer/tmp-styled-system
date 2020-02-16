"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var jest_emotion_1 = require("jest-emotion");
var styled_1 = require("@emotion/styled");
var styled_system_1 = require("../../styled-system");
expect.extend(jest_emotion_1.matchers);
expect.addSnapshotSerializer(jest_emotion_1["default"]);
var render = function (el) { return react_test_renderer_1["default"].create(el).toJSON(); };
describe('emotion', function () {
    test('default props can be overridden', function () {
        var Box = styled_1["default"]('div')(styled_system_1.space);
        Box.defaultProps = {
            px: 0,
            py: 0
        };
        var json = render(<Box px={2} py={1}/>);
        expect(json).toHaveStyleRule('padding-left', '8px');
        expect(json).toHaveStyleRule('padding-right', '8px');
        expect(json).toHaveStyleRule('padding-top', '4px');
        expect(json).toHaveStyleRule('padding-bottom', '4px');
    });
    test('responsive styles are rendered in the correct order', function () {
        var Box = styled_1["default"]('div')(styled_system_1.space);
        var json = render(<Box m={[1, null, 3]} p={[1, 2, 3]}/>);
        expect(json).toMatchSnapshot();
    });
    test('object breakpoints work with defaultProps', function () {
        var Box = styled_1["default"]('div')(styled_system_1.space);
        var theme = {
            disableStyledSystemCache: true,
            breakpoints: {
                small: '32em',
                medium: '40em'
            }
        };
        Box.defaultProps = {
            theme: theme,
            p: {
                _: 0,
                medium: 4
            },
            m: {
                small: 2,
                medium: 3
            }
        };
        var json = render(<Box />);
        expect(json).toMatchSnapshot();
    });
});
