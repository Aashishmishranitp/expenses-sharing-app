import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';
import Spinner from '../Components/Spinner.js';

const LoginUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      // console.log(values)
      setLoading(true);
      const { data } = await axios.post('/login', values);
      setLoading(false);
      message.success('Login successful');
      localStorage.setItem(
        'user',
        JSON.stringify({ ...data.user, password: '' })
      );
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-xl w-full">
          <div className="ml-5 w-full p-8 lg:w-11/12">
            <Form layout="vertical" onFinish={submitHandler}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="email"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                />
              </Form.Item>
              <div className="mt-2 text-end">
                <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
                  Forget Password?
                </Link>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#FF204E] text-white w-full py-2 rounded hover:bg-blue-600"
                >
                  Sign In
                </Button>
              </Form.Item>
              <div className="flex items-center justify-center mt-4">
                <Button
                  type="default"
                  className="flex items-center justify-center w-full"
                >
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    {/* SVG Paths */}
                  </svg>
                  <span className="ml-3">Sign in with Google</span>
                </Button>
              </div>
              <div className="mt-6 text-center">
                Don't have an account?{' '}
                <Link to="/register">
                  <span className="text-[#FF204E] font-semibold">Sign up</span>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
