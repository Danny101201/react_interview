const PROCESS_SETTINGS = {
  material: {
    temperatures: {
      variableName: "MaterialTemperature",
      unit: "°C",
      digits: 0,
    },
  },

  injection: {
    pressures: {
      variableName: "InjectionPressure",
      unit: "bar",
      digits: 0,
    },
    speeds: {
      variableName: "InjectionSpeed",
      unit: "%",
      digits: 0,
    },
    positions: {
      additionalVariableName: "V-PChangePosition",
      variableName: "InjectionPosition",
      unit: "mm",
      digits: 1,
    },
  },

  holding: {
    pressures: {
      variableName: "HoldingPressure",
      unit: "bar",
      digits: 0,
    },
    speeds: {
      variableName: "HoldingSpeed",
      unit: "%",
      digits: 0,
    },
    times: {
      additionalVariableName: "CoolingTime",
      variableName: "HoldingTime",
      unit: "s",
      digits: 1,
    },
  },

  storage: {
    pressures: {
      variableName: "HoldingPressure",
      unit: "bar",
      digits: 0,
    },
    rotarySpeed: {
      variableName: "StorageSpeed",
      unit: "rpm",
      digits: 0,
    },
    positions: {
      variableName: "StoragePosition",
      unit: "mm",
      digits: 1,
    },
  },

  // 開關模
  mold: {
    open: {
      pressures: {
        variableName: "MoldOpenPressure",
        unit: "bar",
        digits: 0,
      },
      speeds: {
        variableName: "MoldOpenSpeed",
        unit: "%",
        digits: 0,
      },
      positions: {
        variableName: "MoldOpenPosition",
        unit: "mm",
        digits: 1,
      },
    },
    close: {
      pressures: {
        variableName: "MoldClosePressure",
        unit: "bar",
        digits: 0,
      },
      speeds: {
        variableName: "MoldCloseSpeed",
        unit: "%",
        digits: 0,
      },
      positions: {
        variableName: "MoldClosePosition",
        unit: "mm",
        digits: 1,
      },
    },
  },

  // 托模
  pallet: {
    forward: {
      pressures: {
        variableName: "PalletForwardPressure",
        unit: "bar",
        digits: 0,
      },
      speeds: {
        variableName: "PalletForwardSpeed",
        unit: "%",
        digits: 0,
      },
      positions: {
        variableName: "PalletForwardPosition",
        unit: "mm",
        digits: 1,
      },
    },
    backward: {
      pressures: {
        variableName: "PalletBackwardPressure",
        unit: "bar",
        digits: 0,
      },
      speeds: {
        variableName: "PalletBackwardSpeed",
        unit: "%",
        digits: 0,
      },
      positions: {
        variableName: "PalletBackwardPosition",
        unit: "mm",
        digits: 1,
      },
    },
  },
} as const;


type MachineProcessSettingsCategoryName = keyof typeof PROCESS_SETTINGS;
type MachineProcessSettingsName =
  'temperatures' |
  'speeds' |
  'positions' |
  'times' |
  'pressures' |
  'rotarySpeed' |
  'open' |
  'close' |
  'forward' |
  'backward';

type MachineProcessSettingsThirdCategoryNames = 'pressures' | 'speeds' | 'positions'

type MachineProcessSettingsReturnValue = {
  additionalVariableName?: string,
  variableName: string,
  unit: string,
  digits: number,
}

type PROCESS_SETTINGS_type = {
  [key in MachineProcessSettingsCategoryName]?: {
    [key in MachineProcessSettingsName]?: {
      [key in MachineProcessSettingsThirdCategoryNames]: MachineProcessSettingsReturnValue
    } | MachineProcessSettingsReturnValue
  }
}

const AAA: PROCESS_SETTINGS_type = {
  material: {
    temperatures: {
      variableName: '',
      unit: '',
      digits: 0
    }
  },
  pallet: {
    backward: {
      pressures: {
        unit: '',
        variableName: '',
        digits: 0
      },
      speeds: {
        unit: '',
        variableName: '',
        digits: 0
      },
      positions: {
        unit: '',
        variableName: '',
        digits: 0
      }
    }
  }
}

const Test: {
  [key in MachineProcessSettingsName]?: any
} = {
  temperatures: '111',
  rotarySpeed: '1'
}
