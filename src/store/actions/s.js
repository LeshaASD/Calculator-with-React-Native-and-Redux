{<View style={styles.rootContainer}>
                <View style={styles.containerDisplay}>
                    <Text style={styles.displayText}>{this.props.result}</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <CalcButton operator='CE' press={this.props.onClearAction}/>
                        <CalcButton operator='=' press={this.props.onResultAction}/>
                    </View>
                    <View style={styles.row}>
                        <CalcButton operator='7' press={() => this.props.onPressAction('7')}/>
                        <CalcButton operator='8' press={() => this.props.onPressAction('8')}/>
                        <CalcButton operator='9' press={() => this.props.onPressAction('9')}/>
                        <CalcButton operator='/' press={() => this.props.onPressAction('/')}/>
                    </View>
                    <View style={styles.row}>
                        <CalcButton operator='4' press={() => this.props.onPressAction('4')}/>
                        <CalcButton operator='5' press={() => this.props.onPressAction('5')}/>
                        <CalcButton operator='6' press={() => this.props.onPressAction('6')}/>
                        <CalcButton operator='*' press={() => this.props.onPressAction('*')}/>
                    </View>
                    <View style={styles.row}>
                        <CalcButton operator='1' press={() => this.props.onPressAction('1')}/>
                        <CalcButton operator='2' press={() => this.props.onPressAction('2')}/>
                        <CalcButton operator='3' press={() => this.props.onPressAction('3')}/>
                        <CalcButton operator='-'  press={() => this.props.onPressAction('-')}/>
                    </View>
                    <View style={styles.row}>
                        <CalcButton operator='0' press={() => this.props.onPressAction('0')}/>
                        <CalcButton operator='.' press={() => this.props.onPressAction('.')}/>
                        <CalcButton operator='<' press={this.props.onBackspaceAction}/>
                        <CalcButton operator='+'  press={() => this.props.onPressAction('+')}/>
                    </View>
                </View>
            </View>}
