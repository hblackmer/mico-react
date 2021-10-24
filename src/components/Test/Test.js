import React, { Component, Fragment } from 'react';
import {
    Progress,
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form'
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import { addAnswer } from '../../redux/ActionCreators';
import './Test.css';

const mapStateToProps = state => {
    return {
        css: state.css,
        html: state.html,
        javascript: state.javascript,
        programming: state.programming,
        react: state.react
    };
};

const mapDispatchToProps = {
    addAnswer: (answer) => (addAnswer(answer)),
    resetFeedbackForm: () => (actions.reset('feedbackForm'))
};

const questionList = [];

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showAnswer: false,
          timerActive: false,
          questionNum: 0,
          questionMax: 7
        };
        this.questionSubmitted = this.questionSubmitted.bind(this);
        this.questionPrev = this.questionPrev.bind(this);
        this.questionNext = this.questionNext.bind(this);
        this.hideComponent = this.hideComponent.bind(this);
    }

    questionSubmitted() {
        this.props.resetFeedbackForm();
    }

    questionPrev() {
        if (this.state.questionNum > 0) {
            this.setState(prevState => {
                return {
                    questionNum: prevState.questionNum - 1,
                    timerActive: !this.state.timerActive
                }
            });
        }
    }

    questionNext() {
        if (this.state.questionNum < this.state.questionMax) {
            this.setState(prevState => {
                return {questionNum: prevState.questionNum + 1}
            });
        }
        if (this.state.questionNum === this.state.questionMax-1) {
            this.setState({
                timerActive: !this.state.timerActive
            });
        }
    }

    questionSet(num) {
        this.setState({questionNum: num});
    }

    hideComponent() {
        this.setState({
            showAnswer: !this.state.showAnswer,
            timerActive: true
        });
        this.generateQuestions();
    }

    generateQuestions = () => {
        while (questionList.length < this.state.questionMax) {
            let randomQuestionIdx = Math.floor(Math.random()*this.props.programming.length);
            let randomQuestion = this.props.programming[randomQuestionIdx];
            if (questionList.indexOf(randomQuestion) === -1) {
                questionList.push(this.props.programming[randomQuestionIdx]);
            }
        }
    };

    allQuestions = (category) => {
        let lastQuestion = this.state.questionNum !== this.state.questionMax;
        let question = lastQuestion && questionList[this.state.questionNum].question;

        if (this.state.questionMax === 7) {
            return (
                <Fragment>
                    {this.state.questionNum === 7 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 6 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 5 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 4 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 3 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 2 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 1 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 0 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                </Fragment>
            );
        }
    }

    render() {
        const { showAnswer, timerActive, questionMax, questionNum } = this.state;

        return (
            <div className="test">
                <Container>
                    <div className="dark-overlay"></div>
                    <Row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col className="test-timer">
                                    <Timer active={timerActive} duration={null} className="h4">
                                        <i className="fas fa-stopwatch" />
                                        <span>  </span>
                                        <Timecode />
                                    </Timer>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 10, offset: 1 }}>
                                    <Progress animated className="progress" color="success" value={(questionNum / questionMax) * 100}>{questionNum}/{questionMax}</Progress>
                                </Col>
                            </Row>
                            <p className="text-danger text-center">Test functionality is still in progress! The following is for demo purposes currently.</p>
                            { showAnswer ? 
                                <Fragment>
                                    {this.allQuestions("programming")}
                                </Fragment> : 
                                <Button color="primary" onClick={() => 
                                    this.hideComponent()
                                }>START</Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));