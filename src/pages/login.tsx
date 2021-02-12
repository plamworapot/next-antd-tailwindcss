import React, { FC } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Divider,
  InputNumber,
  Switch,
  Slider,
  Button,
} from "antd";
import * as CSS from "csstype";

const { Header, Footer, Sider, Content } = Layout;
// const DemoBox = (props) => (
//   <p className={`height-${props.value}`}>{props.children}</p>
// );
const FormItem = Form.Item;
// const Option = Select.Option;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Home: FC = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const center: CSS.Properties = {
    position: "absolute",
    top: "50%",
    // left: '50%',
    transform: "translateY(-50%)",
    // maxWidth: '100%',
  };

  return (
    <Layout>
      <Content className="">
        <Row className="h-100vh">
          <Col
            className="position-relative"
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 20, offset: 2 }}
          >
            {/* <div className=" h-100 w-100"> */}
            <div style={center}>
              <Row className="border bg-red-200">
                <Col xs={24} md={12} className="px-3 pr-md-5 pl-md-3">
                  <h1>Login</h1>
                  <h3>Sign In to your account</h3>
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      colon={false}
                      label={
                        <img
                          //   preview={false}
                          width={20}
                          src="./user_black.svg"
                        />
                      }
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      colon={false}
                      label={
                        <img
                          //   preview={false}
                          width={20}
                          src="./lock_black.svg"
                        />
                      }
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      {...tailLayout}
                      name="remember"
                      valuePropName="checked"
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
                <Col xs={24} md={12}>
                  <div className="bg-red-300">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus minima laudantium voluptates, delectus exercitationem
                    labore cum odio iure ut ex voluptas alias inventore
                    perferendis, suscipit laborum praesentium itaque cupiditate
                    dolorum.
                  </div>
                </Col>
              </Row>
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
