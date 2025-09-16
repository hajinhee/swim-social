import {
    r as o,
    u as c,
    a as d,
    j as e
} from "./index-C-0La4hL.js";

function m() {
    const [n, i] = o.useState(!1), a = c(), l = d(), r = [{
        path: "/",
        label: "대시보드",
        icon: "ri-dashboard-line"
    }, {
        path: "/records",
        label: "기록",
        icon: "ri-calendar-line"
    }, {
        path: "/social",
        label: "소셜",
        icon: "ri-team-line"
    }, {
        path: "/ranking",
        label: "랭킹",
        icon: "ri-trophy-line"
    }], t = s => {
        l(s), i(!1)
    };
    return e.jsxs(e.Fragment, {
        children: [e.jsx("nav", {
            className: "hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:flex bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm",
            children: e.jsx("div", {
                className: "w-full max-w-7xl mx-auto px-6 py-4",
                children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [e.jsxs("div", {
                        className: "flex items-center space-x-3 cursor-pointer",
                        onClick: () => t("/"),
                        children: [e.jsx("div", {
                            className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center",
                            children: e.jsx("i", {
                                className: "ri-swimming-line text-white text-xl"
                            })
                        }), e.jsx("span", {
                            className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent",
                            style: {
                                fontFamily: '"Pacifico", serif'
                            },
                            children: "SwimSocial"
                        })]
                    }), e.jsx("div", {
                        className: "flex items-center space-x-8",
                        children: r.map(s => e.jsxs("button", {
                            onClick: () => t(s.path),
                            className: `flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${a.pathname===s.path?"bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg":"text-gray-600 hover:text-blue-600 hover:bg-blue-50"}`,
                            children: [e.jsx("i", {
                                className: `${s.icon} text-lg`
                            }), e.jsx("span", {
                                children: s.label
                            })]
                        }, s.path))
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [e.jsx("button", {
                            className: "p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer",
                            children: e.jsx("i", {
                                className: "ri-notification-line text-xl"
                            })
                        }), e.jsx("div", {
                            className: "w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center cursor-pointer",
                            children: e.jsx("span", {
                                className: "text-white font-bold text-sm",
                                children: "김"
                            })
                        })]
                    })]
                })
            })
        }), e.jsx("nav", {
            className: "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-blue-100 shadow-lg",
            children: e.jsx("div", {
                className: "flex items-center justify-around py-2",
                children: r.map(s => e.jsxs("button", {
                    onClick: () => t(s.path),
                    className: `flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 cursor-pointer ${a.pathname===s.path?"text-blue-600":"text-gray-500 hover:text-blue-600"}`,
                    children: [e.jsx("i", {
                        className: `${s.icon} text-xl mb-1`
                    }), e.jsx("span", {
                        className: "text-xs font-medium",
                        children: s.label
                    })]
                }, s.path))
            })
        }), e.jsx("header", {
            className: "md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm",
            children: e.jsxs("div", {
                className: "flex items-center justify-between px-4 py-3",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [e.jsx("div", {
                        className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center",
                        children: e.jsx("i", {
                            className: "ri-swimming-line text-white text-lg"
                        })
                    }), e.jsx("span", {
                        className: "text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent",
                        style: {
                            fontFamily: '"Pacifico", serif'
                        },
                        children: "SwimSocial"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [e.jsx("button", {
                        className: "p-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors cursor-pointer",
                        children: e.jsx("i", {
                            className: "ri-notification-line text-lg"
                        })
                    }), e.jsx("div", {
                        className: "w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center cursor-pointer",
                        children: e.jsx("span", {
                            className: "text-white font-bold text-xs",
                            children: "김"
                        })
                    })]
                })]
            })
        }), e.jsx("div", {
            className: "hidden md:block h-20"
        }), e.jsx("div", {
            className: "md:hidden h-16"
        }), e.jsx("div", {
            className: "md:hidden h-20"
        })]
    })
}

function h({
    children: n,
    className: i = "",
    hover: a = !1,
    onClick: l
}) {
    const r = "bg-white rounded-2xl shadow-lg border border-blue-100",
        t = a ? "hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer" : "",
        s = l ? "cursor-pointer" : "";
    return e.jsx("div", {
        className: `${r} ${t} ${s} ${i}`,
        onClick: l,
        children: n
    })
}
export {
    h as C, m as N
};
//# sourceMappingURL=Card-CH0hIbPs.js.map