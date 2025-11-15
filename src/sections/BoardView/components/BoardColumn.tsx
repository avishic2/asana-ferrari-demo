export type BoardColumnProps = {
  variant: string;
  tasks?: Array<{
    title: string;
    checkboxIcon: string;
    editIcon: string;
    assigneeIcon: string;
    dueDateIcon: string;
    likeIcon: string;
  }>;
  addTaskIcon: string;
};

export const BoardColumn = (props: BoardColumnProps) => {
  return (
    <div
      className={
        props.variant === "with-tasks"
          ? "caret-transparent fill-neutral-500 h-full w-full"
          : "caret-transparent fill-neutral-500 h-full shrink-0"
      }
    >
      <div className="caret-transparent fill-neutral-500 h-full w-full">
        <div className="relative caret-transparent flex fill-neutral-500 flex-col bg-stone-50 box-border basis-[304px] shrink-0 max-h-full max-w-[304px] w-[304px] p-3 rounded-md">
          <div className="caret-transparent flex fill-neutral-500 basis-full flex-col grow relative">
            <div
              role="presentation"
              className="caret-transparent fill-neutral-500 basis-full grow flex flex-col min-h-px overflow-x-hidden overflow-y-auto -mt-0.5 -mx-3 pt-0.5 px-3 scroll-py-6"
            >
              <div className="caret-transparent fill-neutral-500 h-full relative basis-full grow shrink-0 w-[280px]">
                <div className="caret-transparent fill-neutral-500 flex flex-col h-full w-full">
                  {props.variant === "with-tasks" && (
                    <div className="caret-transparent fill-neutral-500 shrink-0 pb-2">
                      <div className="caret-transparent fill-neutral-500 h-full w-full">
                        <div className="caret-transparent fill-neutral-500">
                          <div className="caret-transparent contents fill-neutral-500">
                            <div className="caret-transparent fill-neutral-500">
                              {props.tasks?.map((task, index) => (
                                <div
                                  key={index}
                                  className="bg-white shadow-[rgb(237,234,233)_0px_0px_0px_1px,rgba(109,110,111,0.08)_0px_1px_4px_0px] box-border caret-transparent fill-neutral-500 border overflow-hidden rounded-lg border-solid border-white hover:shadow-[rgb(175,171,172)_0px_0px_0px_1px,rgba(109,110,111,0.1)_0px_3px_8px_0px]"
                                >
                                  <div className="relative bg-white caret-transparent fill-neutral-500 overflow-hidden">
                                    <div className="caret-transparent fill-neutral-500">
                                      <div className="caret-transparent fill-neutral-500 m-4"></div>
                                      <div className="caret-transparent fill-neutral-500 mb-4 mx-4"></div>
                                      <div className="caret-transparent fill-neutral-500 mt-4 mb-3 mx-4"></div>
                                      <div className="relative caret-transparent fill-neutral-500 leading-[22px] max-h-[110px] min-h-5 overflow-x-hidden overflow-y-auto mx-4 my-3">
                                        <span className="caret-transparent fill-neutral-500 indent-[24px]">
                                          <span className="caret-transparent flow-root fill-neutral-500 break-words overflow-hidden">
                                            {task.title}
                                          </span>
                                        </span>
                                        <div className="absolute items-center caret-transparent flex fill-neutral-500 h-5 overflow-hidden left-0 top-0">
                                          <div
                                            role="checkbox"
                                            aria-label="Mark complete"
                                            className="items-center box-border caret-transparent fill-neutral-500 h-4 justify-center align-text-bottom w-4 mr-1"
                                          >
                                            <img
                                              src={task.checkboxIcon}
                                              alt="Icon"
                                              className="caret-transparent h-4 w-4 p-px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute caret-transparent fill-neutral-500 invisible z-auto right-2 top-2 md:visible md:z-[2]">
                                        <div className="items-center bg-white shadow-[rgb(237,234,233)_0px_0px_0px_1px,rgba(109,110,111,0.08)_0px_1px_4px_0px] box-border caret-transparent flex fill-neutral-500 invisible border rounded-lg border-solid border-white md:visible">
                                          <div className="caret-transparent fill-neutral-500 invisible md:visible">
                                            <div
                                              role="button"
                                              aria-label="Edit"
                                              className="items-center box-border caret-transparent inline-flex fill-neutral-500 h-7 justify-center min-h-7 min-w-7 invisible w-7 border bg-[position:0px_0px] rounded-md border-solid border-transparent md:visible hover:bg-orange-950/0"
                                            >
                                              <img
                                                src={task.editIcon}
                                                alt="Icon"
                                                className="caret-transparent shrink-0 h-4 invisible w-4 md:visible"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="caret-transparent fill-neutral-500 mx-3">
                                        <div className="caret-transparent fill-neutral-500 h-0 overflow-hidden">
                                          <div className="relative caret-transparent fill-neutral-500"></div>
                                        </div>
                                      </div>
                                      <div className="items-center caret-transparent gap-x-2 flex fill-neutral-500 flex-wrap gap-y-3 mt-3 mb-4 mx-4">
                                        <div className="items-center caret-transparent flex fill-neutral-500 basis-[min-content] grow">
                                          <div className="caret-transparent flex fill-neutral-500 mr-2">
                                            <div
                                              role="button"
                                              aria-label="Toggle assignee popover"
                                              className="items-center box-border caret-transparent flex fill-neutral-500 justify-center rounded-[14px] hover:bg-orange-950/0 hover:border-zinc-900"
                                            >
                                              <div className="items-center box-border caret-transparent flex fill-neutral-500 h-6 justify-center w-6 border border-neutral-500 bg-center rounded-[50%] border-dashed">
                                                <img
                                                  src={task.assigneeIcon}
                                                  alt="Icon"
                                                  className="caret-transparent shrink-0 h-3 w-3"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="caret-transparent fill-neutral-500 invisible md:visible">
                                            <div className="caret-transparent fill-neutral-500 invisible md:visible">
                                              <div
                                                role="button"
                                                aria-label="Due date"
                                                className="caret-transparent inline-flex fill-neutral-500 invisible rounded-[14px] md:visible"
                                              >
                                                <div className="items-center box-border caret-transparent flex fill-neutral-500 h-6 justify-center invisible w-6 border border-neutral-500 bg-center rounded-[50%] border-dashed md:visible">
                                                  <img
                                                    src={task.dueDateIcon}
                                                    alt="Icon"
                                                    className="caret-transparent shrink-0 h-3 invisible w-3 md:visible"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="items-center caret-transparent flex fill-neutral-500 ml-auto">
                                          <div className="caret-transparent fill-neutral-500 invisible md:visible">
                                            <div className="relative caret-transparent fill-neutral-500 invisible md:visible">
                                              <div
                                                role="button"
                                                aria-label="0 likes. Click to like this task"
                                                className="text-neutral-500 text-xs items-center box-border caret-transparent inline-flex fill-neutral-500 shrink-0 h-5 justify-center leading-5 invisible border overflow-hidden bg-[position:0px_0px] px-[3px] rounded-md border-solid border-transparent md:visible hover:text-zinc-900 hover:bg-orange-950/0"
                                              >
                                                <img
                                                  src={task.likeIcon}
                                                  alt="Icon"
                                                  className="caret-transparent shrink-0 h-3 invisible w-3 md:visible"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="caret-transparent fill-neutral-500"></div>
                                    <div className="absolute caret-transparent hidden fill-neutral-500 m-2 right-0 top-0"></div>
                                    <input
                                      type="file"
                                      className="items-baseline bg-transparent caret-transparent hidden fill-neutral-500 text-ellipsis text-nowrap p-0"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="caret-transparent fill-neutral-500">
                    <div
                      role="button"
                      className="text-neutral-500 font-medium items-center box-border caret-transparent flex fill-neutral-500 shrink-0 h-9 leading-9 text-nowrap border overflow-hidden bg-[position:0px_0px] mb-1 px-3 rounded-md border-solid border-transparent hover:text-zinc-900 hover:bg-orange-950/0"
                    >
                      <img
                        src={props.addTaskIcon}
                        alt="Icon"
                        className="caret-transparent shrink-0 h-3 text-nowrap w-3 mr-1"
                      />
                      Add task
                    </div>
                  </div>
                  <div className="caret-transparent fill-neutral-500 grow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
