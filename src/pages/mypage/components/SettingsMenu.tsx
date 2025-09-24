import Card from "@/components/base/Card";
import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
  icon: string;
}

interface SettingsMenuProps {
  menuItems: MenuItem[];
}

export const SettingsMenu = ({ menuItems }: SettingsMenuProps) => {
  return (
    <section>
      <Card>
        <ul role="list" className="divide-y divide-gray-100">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="group flex w-full items-center justify-between p-4 transition-colors duration-200 ease-in-out hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gray-100 transition-colors duration-200 group-hover:bg-blue-100">
                    <i
                      className={`${item.icon} text-xl text-gray-600 group-hover:text-blue-600`}
                    ></i>
                  </span>
                  <span className="flex-1 text-base font-medium text-gray-800">
                    {item.title}
                  </span>
                </div>
                {item.title === "로그아웃" ? (
                  ""
                ) : (
                  <i className="ri-arrow-right-s-line text-2xl text-gray-400 transition-transform duration-200 group-hover:translate-x-1"></i>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};
