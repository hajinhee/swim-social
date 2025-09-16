import {
    r as l,
    j as e
} from "./index-C-0La4hL.js";
import {
    C as n,
    N as m
} from "./Card-CH0hIbPs.js";
import {
    B as i
} from "./Button-BwOLboJ4.js";

function h() {
    const [t, s] = l.useState(!1), a = () => {
        s(!0), setTimeout(() => {
            s(!1);
            const r = document.createElement("a");
            r.href = "#", r.download = "swim-report-2024.pdf", r.click()
        }, 2e3)
    };
    return e.jsxs(e.Fragment, {
        children: [e.jsx("section", {
            className: "mb-8",
            children: e.jsx("div", {
                className: "relative rounded-3xl overflow-hidden shadow-xl bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-[400px] flex items-center",
                style: {
                    backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(6, 182, 212, 0.8)), url('https://readdy.ai/api/search-image?query=Beautiful%20swimming%20pool%20with%20crystal%20clear%20blue%20water%2C%20modern%20design%2C%20underwater%20view%20with%20sunlight%20rays%20penetrating%20water%20surface%2C%20serene%20aquatic%20environment%2C%20professional%20swimming%20facility%20with%20lane%20markers&width=1200&height=600&seq=hero-swimming-bg&orientation=landscape')"
                },
                children: e.jsx("div", {
                    className: "w-full px-6 md:px-12 py-8",
                    children: e.jsxs("div", {
                        className: "max-w-2xl",
                        children: [e.jsx("h1", {
                            className: "text-3xl md:text-5xl font-bold text-white mb-4 leading-tight",
                            children: "안녕하세요, 김수영님! 🏊‍♀️"
                        }), e.jsxs("p", {
                            className: "text-lg md:text-xl text-blue-100 mb-8 leading-relaxed",
                            children: ["오늘도 멋진 수영을 준비하고 계시는군요!", e.jsx("br", {}), "친구들과 함께 건강한 경쟁을 즐겨보세요."]
                        }), e.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [e.jsxs(i, {
                                variant: "secondary",
                                size: "lg",
                                className: "bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30",
                                children: [e.jsx("i", {
                                    className: "ri-add-line mr-2"
                                }), "새 기록 추가"]
                            }), e.jsxs(i, {
                                onClick: a,
                                variant: "secondary",
                                size: "lg",
                                className: "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20",
                                children: [e.jsx("i", {
                                    className: "ri-download-line mr-2"
                                }), "리포트 다운로드"]
                            })]
                        })]
                    })
                })
            })
        }), t && e.jsx("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: e.jsxs(n, {
                className: "max-w-sm w-full p-6 text-center",
                children: [e.jsx("div", {
                    className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: e.jsx("div", {
                        className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                    })
                }), e.jsx("h3", {
                    className: "text-lg font-bold text-gray-900 mb-2",
                    children: "리포트 생성 중"
                }), e.jsxs("p", {
                    className: "text-gray-600 text-sm",
                    children: ["수영 데이터를 분석하여", e.jsx("br", {}), "PDF 리포트를 생성하고 있습니다..."]
                })]
            })
        })]
    })
}

function g() {
    const t = [{
        title: "이번 주 수영",
        value: "12.5km",
        change: "+15%",
        icon: "ri-swimming-line",
        color: "from-blue-500 to-blue-600"
    }, {
        title: "총 수영 시간",
        value: "8시간 30분",
        change: "+22%",
        icon: "ri-time-line",
        color: "from-cyan-500 to-cyan-600"
    }, {
        title: "소모 칼로리",
        value: "3,240kcal",
        change: "+8%",
        icon: "ri-fire-line",
        color: "from-orange-500 to-red-500"
    }, {
        title: "수영 횟수",
        value: "15회",
        change: "+5%",
        icon: "ri-medal-line",
        color: "from-purple-500 to-pink-500"
    }];
    return e.jsxs("section", {
        className: "mb-8",
        children: [e.jsx("h2", {
            className: "text-2xl font-bold text-gray-900 mb-6",
            children: "이번 주 통계"
        }), e.jsx("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
            children: t.map((s, a) => e.jsxs(n, {
                className: "p-4 md:p-6",
                children: [e.jsxs("div", {
                    className: "flex items-start justify-between mb-4",
                    children: [e.jsx("div", {
                        className: `w-12 h-12 bg-gradient-to-r ${s.color} rounded-xl flex items-center justify-center`,
                        children: e.jsx("i", {
                            className: `${s.icon} text-white text-xl`
                        })
                    }), e.jsx("span", {
                        className: "text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-full",
                        children: s.change
                    })]
                }), e.jsx("h3", {
                    className: "text-sm font-medium text-gray-600 mb-2",
                    children: s.title
                }), e.jsx("p", {
                    className: "text-2xl md:text-3xl font-bold text-gray-900",
                    children: s.value
                })]
            }, a))
        })]
    })
}

function p() {
    const t = [{
        id: 1,
        date: "2024.01.15",
        time: "19:30",
        type: "자유형",
        distance: "2.5km",
        duration: "45분",
        calories: 420,
        pace: "1분 48초/100m",
        icon: "ri-swimming-line",
        color: "from-blue-500 to-blue-600"
    }, {
        id: 2,
        date: "2024.01.14",
        time: "07:00",
        type: "접영",
        distance: "1.2km",
        duration: "35분",
        calories: 380,
        pace: "2분 55초/100m",
        icon: "ri-bug-line",
        color: "from-purple-500 to-purple-600"
    }, {
        id: 3,
        date: "2024.01.13",
        time: "18:45",
        type: "배영",
        distance: "1.8km",
        duration: "40분",
        calories: 320,
        pace: "2분 13초/100m",
        icon: "ri-user-line",
        color: "from-cyan-500 to-cyan-600"
    }, {
        id: 4,
        date: "2024.01.12",
        time: "19:15",
        type: "평영",
        distance: "1.5km",
        duration: "42분",
        calories: 290,
        pace: "2분 48초/100m",
        icon: "ri-heart-pulse-line",
        color: "from-green-500 to-green-600"
    }];
    return e.jsxs("section", {
        className: "mb-8",
        children: [e.jsxs("div", {
            className: "flex items-center justify-between mb-6",
            children: [e.jsx("h2", {
                className: "text-2xl font-bold text-gray-900",
                children: "최근 수영 기록"
            }), e.jsxs("button", {
                className: "text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer whitespace-nowrap",
                children: ["전체 보기 ", e.jsx("i", {
                    className: "ri-arrow-right-line ml-1"
                })]
            })]
        }), e.jsx("div", {
            className: "grid gap-4 md:gap-6",
            children: t.map(s => e.jsxs(n, {
                hover: !0,
                className: "p-4 md:p-6",
                children: [e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [e.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [e.jsx("div", {
                            className: `w-12 h-12 bg-gradient-to-r ${s.color} rounded-xl flex items-center justify-center`,
                            children: e.jsx("i", {
                                className: `${s.icon} text-white text-xl`
                            })
                        }), e.jsxs("div", {
                            children: [e.jsx("h3", {
                                className: "text-lg font-bold text-gray-900",
                                children: s.type
                            }), e.jsxs("p", {
                                className: "text-sm text-gray-600",
                                children: [s.date, " • ", s.time]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "hidden md:grid grid-cols-4 gap-6 text-center",
                        children: [e.jsxs("div", {
                            children: [e.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "거리"
                            }), e.jsx("p", {
                                className: "font-bold text-gray-900",
                                children: s.distance
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "시간"
                            }), e.jsx("p", {
                                className: "font-bold text-gray-900",
                                children: s.duration
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "칼로리"
                            }), e.jsx("p", {
                                className: "font-bold text-gray-900",
                                children: s.calories
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "페이스"
                            }), e.jsx("p", {
                                className: "font-bold text-gray-900 text-sm",
                                children: s.pace
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "md:hidden text-right",
                        children: [e.jsx("p", {
                            className: "font-bold text-gray-900 text-lg",
                            children: s.distance
                        }), e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: s.duration
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "md:hidden mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-center",
                    children: [e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "칼로리"
                        }), e.jsx("p", {
                            className: "font-bold text-gray-900",
                            children: s.calories
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "페이스"
                        }), e.jsx("p", {
                            className: "font-bold text-gray-900 text-sm",
                            children: s.pace
                        })]
                    })]
                })]
            }, s.id))
        })]
    })
}

function j() {
    const [t, s] = l.useState(!1), [a, r] = l.useState(!1), [c, d] = l.useState("2024.01.15 20:30"), x = async () => {
        r(!0), setTimeout(() => {
            r(!1), s(!0), d(new Date().toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            }).replace(/\. /g, ".").slice(0, -1))
        }, 3e3)
    }, o = () => {
        s(!0)
    };
    return e.jsx("section", {
        className: "mb-8",
        children: e.jsxs(n, {
            className: "p-4 md:p-6",
            children: [e.jsxs("div", {
                className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [e.jsx("div", {
                        className: "w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center",
                        children: e.jsx("i", {
                            className: "ri-apple-line text-white text-xl"
                        })
                    }), e.jsxs("div", {
                        children: [e.jsx("h3", {
                            className: "text-lg font-bold text-gray-900",
                            children: "Apple Watch 연동"
                        }), e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: t ? e.jsxs(e.Fragment, {
                                children: ["마지막 동기화: ", c]
                            }) : "워치 데이터를 동기화하여 정확한 기록을 관리하세요"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [t && e.jsxs("div", {
                        className: "flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-2 rounded-xl",
                        children: [e.jsx("div", {
                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        }), e.jsx("span", {
                            className: "text-sm font-medium",
                            children: "연결됨"
                        })]
                    }), t ? e.jsx(i, {
                        onClick: x,
                        variant: "outline",
                        size: "md",
                        disabled: a,
                        children: a ? e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"
                            }), "동기화 중..."]
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx("i", {
                                className: "ri-refresh-line mr-2"
                            }), "동기화"]
                        })
                    }) : e.jsxs(i, {
                        onClick: o,
                        size: "md",
                        children: [e.jsx("i", {
                            className: "ri-link mr-2"
                        }), "연결하기"]
                    })]
                })]
            }), a && e.jsxs("div", {
                className: "mt-4 pt-4 border-t border-gray-100",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-3 text-sm text-gray-600",
                    children: [e.jsx("div", {
                        className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"
                    }), e.jsx("span", {
                        children: "Apple Watch에서 운동 데이터를 가져오는 중..."
                    })]
                }), e.jsx("div", {
                    className: "mt-2 bg-gray-200 rounded-full h-2",
                    children: e.jsx("div", {
                        className: "bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse",
                        style: {
                            width: "60%"
                        }
                    })
                })]
            })]
        })
    })
}

function N() {
    return e.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50",
        children: [e.jsx(m, {}), e.jsx("main", {
            className: "pb-24 md:pb-8",
            children: e.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [e.jsx(h, {}), e.jsx(j, {}), e.jsx(g, {}), e.jsx(p, {})]
            })
        })]
    })
}
export {
    N as
    default
};
//# sourceMappingURL=page-BCL0Q32G.js.map